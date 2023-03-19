up:
	docker-compose up --build -d

up-prod:
	npm run build
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d

down:
	docker-compose down

recreate:
	docker-compose up --build -d --force-recreate