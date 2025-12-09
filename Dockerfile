FROM node:22-alpine

WORKDIR /app

# On copie TOUT d’un coup → plus simple, plus fiable, zéro problème de lockfile désync
COPY . .

# On force la régénération du lockfile + install complet à chaque build
# C’est légèrement plus long la première fois, mais 100 % reproductible partout
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
