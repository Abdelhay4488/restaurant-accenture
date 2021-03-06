#commands to only run infrastructure
start:
	docker-compose up --build
stop:
	docker-compose down

start-db:
	docker-compose -f db-local.yml up --build || docker-compose -f db-local.yml down

stop-db:
	docker-compose -f db-local.yml down

ps:
	docker container ps
ps-a:
	docker container ps -a

images:
	docker image ls

reset:
	docker container prune -f && docker volume prune -f && docker rmi -f $(docker images -a -q)
