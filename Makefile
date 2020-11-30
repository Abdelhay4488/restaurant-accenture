#commands to only run infrastructure
start:
	#docker-compose up --build || docker-compose down
	docker-compose up --build
stop:
	docker-compose down

start-local:
	docker-compose -f docker-compose-local.yml up --build || docker-compose -f docker-compose-local.yml down

stop-local:
	docker-compose -f docker-compose-local.yml down

start-spring:
	#docker-compose -f docker-compose-spring.yml up --build || docker-compose -f docker-compose-spring.yml down
	docker-compose -f docker-compose-spring.yml up --build

stop-spring:
	docker-compose -f docker-compose-spring.yml down

build-backend:
	docker build -t my-backend -f backend .

run-backend:
	docker run --name my-backend-container -p 9191:9191 my-backend

remove-backend:
	docker container rm my-backend-container && docker image rmi my-backend && docker volume prune -f
ps:
	docker container ps
ps-a:
	docker container ps -a

images:
	docker image ls

reset:
	docker container prune -f && docker volume prune -f && docker rmi -f $(docker images -a -q)
