.PHONY: up down build logs clean

up:
	docker compose up --build

down:
	docker compose down

build:
	docker compose build

logs:
	docker compose logs -f

clean:
	docker compose down -v --remove-orphans
	docker system prune -f

start: up
