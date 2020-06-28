FROM node:10.15

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 4000

CMD ["npm", "run", "dev"]