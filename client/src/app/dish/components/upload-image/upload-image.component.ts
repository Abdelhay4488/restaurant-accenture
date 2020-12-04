import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpServiceService} from "../../services/http-service.service";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(private httpservice: HttpServiceService, private https:HttpClient){}

  @Output() fileSelected= new EventEmitter<FileList>();

  ngOnInit(): void {}

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  file:string;

  viewFile(){
    window.open('https://bucketName.s3.cloudLocation.amazonaws.com/'+this.file);
  }

  deleteFile() {
    this.httpservice.deleteFileService(this.file).subscribe(
        res => {
          this.file = res;

        }
    );
  }

/*  deleteFile()
  {

    this.https.post<string>('http://localhost:8080/deleteFile',this.file).subscribe(
        res => {
          this.file = res;
        }
    );
  }*/
  change(event) {
    this.changeImage = true;
  }
  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.httpservice.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      this.selectedFiles = undefined;
    });
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.fileSelected.emit(this.selectedFiles);
    console.log("event:",event);
    console.log("selectedFiles:",this.selectedFiles);
  }

}
