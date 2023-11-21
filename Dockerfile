FROM node:20-alpine
WORKDIR /setup_back_express
COPY . .
RUN npm install
ENV PORT=1992
EXPOSE 1992
CMD ["npm", "run", "start"]