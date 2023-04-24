import {
  getUserActivity,
  getUserAverage,
  getUserInfo,
  getUserPerformance,
} from "../data/call";
import calorie from "../assets/Icon/nutrition/calorie";
import chicken from "../assets/Icon/nutrition/chicken";
import apple from "../assets/Icon/nutrition/apple";
import burger from "../assets/Icon/nutrition/burger";

/**
 * return user information
 * @param {object} userInfo
 * @return {number}
 */
const checkScore = (userInfo) => {
  if (userInfo.score) return userInfo.score;
  else return userInfo.todayScore;
};

/**
 * return array of object with nutritional information for nutrition Card
 * @param {object} userInfo
 * @return {object[]}
 */
const getKeyData = (userInfo) => {
  let keyData = [
    {
      count: userInfo.keyData.calorieCount,
      svg: calorie,
      type: "Calories",
      color: "rgba(255, 0, 0, 0.07)",
    },
    {
      count: userInfo.keyData.proteinCount,
      svg: chicken,
      type: "Proteines",
      color: "rgba(74, 184, 255, 0.07)",
    },
    {
      count: userInfo.keyData.carbohydrateCount,
      svg: apple,
      type: "Glucides",
      color: "rgba(249, 206, 35, 0.07)",
    },
    {
      count: userInfo.keyData.lipidCount,
      svg: burger,
      type: "Lipides",
      color: "rgba(253, 81, 129, 0.07)",
    },
  ];
  return keyData;
};

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
    keyData: getKeyData(user),
    sessionsAverage: average.sessions,
    sessionsActivity: activity.sessions,
    performance: await performanceFormat(id),
  };
  return userInfo;
};

export { getUser };
