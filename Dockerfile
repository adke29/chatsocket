FROM node:20.9.0
WORKDIR /usr/src/app
# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm production packages 
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]