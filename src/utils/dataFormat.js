import {
  getUserActivity,
  getUserAverage,
  getUserInfo,
  getUserPerformance,
} from "../data/call";
/**
 * return the user performance
 * @param {number} id
 * @returns {Promise<number[]>}
 */
const performanceFormat = async (id) => {
  const userPerformance = await getUserPerformance(id);
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
/**
 * @param {object} userInfo
 * @return {number}
 */
const checkScore = (userInfo) => {
  if (userInfo.score) return userInfo.score;
  else return userInfo.todayScore;
};
/**
 * return all data formatted about an user
 * @param {number} id
 * @returns {Promise<Object>} userInfo -
 */
const getUser = async (id) => {
  const user = await getUserInfo(id);
  const average = await getUserAverage(id);
  const activity = await getUserActivity(id);
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
