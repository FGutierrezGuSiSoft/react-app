docker-compose up --build -d
docker container exec react_app yarn install
docker-compose down
docker-compose up
