#!/bin/bash
docker pull postgres
docker run -p 5432:5432 --name fun-planner -e POSTGRES_PASSWORD=1360 -d postgres
