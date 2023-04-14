import {
  getUserActivity,
  getUserAverage,
  getUserInfo,
  getUserPerformance,
} from "../data/call";

const performanceFormat = async (id) => {
  const userPerformance = await getUserPerformance(id);
  console.log("kind :", userPerformance.kind);
  let performance = {};
  for (let i = 0; i < Object.keys(userPerformance.kind).length; i++) {
    let kindType = Object.values(userPerformance.kind);
    const result = userPerformance.data.find((item) => item.kind === i + 1);
    performance[kindType[i]] = result.value;
  }
  const result = [
    performance.intensity,
    performance.speed,
    performance.strength,
    performance.endurance,
    performance.energy,
    performance.cardio,
  ];
  return result;
};
const checkScore = (userInfo) => {
  if (userInfo.score) return userInfo.score;
  else return userInfo.todayScore;
};
const getUser = async (id) => {
  const user = await getUserInfo(id);
  const average = await getUserAverage(id);
  const activity = await getUserActivity(id);
  console.log(user, id);
  const userInfo = {
    id: user.id,
    firstName: user.userInfos.firstName,
    todayScore: checkScore(user),
    keyData: user.keyData,
    sessionsAverage: average.sessions,
    sessionsActivity: activity.sessions,
    performance: await performanceFormat(id),
  };
  return userInfo;
};

export { getUser };
