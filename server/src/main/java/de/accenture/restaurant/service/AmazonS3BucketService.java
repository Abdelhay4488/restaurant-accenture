package de.accenture.restaurant.service;
import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;

@Service
public class AmazonS3BucketService {

    private AmazonS3 s3Client;

    @Value("${bucketName}")
    private String bucketName;
    @Value("${accessKey}")
    private String accessKey;
    @Value("${secretKey}")
    private String secretKey;

    @Value("${region}")
    private String region;

    private Logger logger = LoggerFactory.getLogger(AmazonS3BucketService.class);

    @PostConstruct
    private void initializeAmazon() {
        BasicAWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);
        this.s3Client = AmazonS3ClientBuilder.standard()
                .withRegion(Regions.fromName(region))
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .build();

    }

    public URL uploadFile(MultipartFile file) {
        String keyName = file.getOriginalFilename();
        URL url= null;
        try {
            url = new URL("http://example.com");
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(file.getSize());
            metadata.setContentType(file.getContentType());
            this.s3Client.putObject(bucketName, keyName, file.getInputStream(), metadata);
            url = this.getDisplayUrl(keyName);
        } catch(IOException ioe) {
            logger.error("IOException: " + ioe.getMessage());
        } catch (AmazonServiceException ase) {
            logger.info("Caught an AmazonServiceException from PUT requests, rejected reasons:");
            logger.info("Error Message:    " + ase.getMessage());
            logger.info("HTTP Status Code: " + ase.getStatusCode());
            logger.info("AWS Error Code:   " + ase.getErrorCode());
            logger.info("Error Type:       " + ase.getErrorType());
            logger.info("Request ID:       " + ase.getRequestId());
            throw ase;
        } catch (AmazonClientException ace) {
            logger.info("Caught an AmazonClientException: ");
            logger.info("Error Message: " + ace.getMessage());
            throw ace;
        }
        return url;
    }

    public URL getDownloadableLink(String keyName) {
        GeneratePresignedUrlRequest req = new GeneratePresignedUrlRequest(bucketName, keyName);
        ResponseHeaderOverrides overrides = new ResponseHeaderOverrides();
        overrides.setContentDisposition("attachment; filename="+ "\""+keyName + "\"");
        req.setResponseHeaders(overrides);
        return this.s3Client.generatePresignedUrl(req);
    }
    public URL getDisplayUrl(String keyName) {
        GeneratePresignedUrlRequest req = new GeneratePresignedUrlRequest(bucketName, keyName);
        ResponseHeaderOverrides overrides = new ResponseHeaderOverrides();
        overrides.setContentDisposition("inline; filename="+ "\""+keyName + "\"");
        req.setResponseHeaders(overrides);
        return this.s3Client.generatePresignedUrl(req);

    }

    private File convertMultipartFileToFile(MultipartFile file) throws IOException {
        File convertedFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convertedFile);
        fos.write(file.getBytes());
        fos.close();
        return convertedFile;
    }

    private void uploadFileToBucket(String fileName, File file) {
        s3Client.putObject(new PutObjectRequest(bucketName, fileName, file)
                .withCannedAcl(CannedAccessControlList.PublicRead));
    }

    public String deleteFileFromBucket(String fileName) {
        s3Client.deleteObject(new DeleteObjectRequest(bucketName, fileName));
        return "Deletion Successful";
    }

}
