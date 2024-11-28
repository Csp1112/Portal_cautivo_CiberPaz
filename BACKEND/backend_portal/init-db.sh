#!/bin/bash

# Crear base de datos y tablas
psql -U postgres -d tiktok_videos -f /docker-entrypoint-initdb.d/bdTiktok_videos.sql
