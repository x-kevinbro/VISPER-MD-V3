FROM ubuntu:22.04

# ... rest of your Dockerfile (lines 2-10)
RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*
  
WORKDIR /usr/src/app

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
