import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';

const generateLearderBoardData = (number) => {
    const users = [];
    while (number >= 0) {
      users.push({
        id: number,
        nickname: faker.internet.userName(),
        avatar: faker.image.avatar(),
        created: faker.date.past(),
        //incluir o game...
        score: faker.number.int({ min: 99, max: 9999 }),
      });
      number--;
    }
    return users;
  };
  writeFileSync(
    "./db.json",
    JSON.stringify({ leaderboard: generateLearderBoardData(20) })
  );

