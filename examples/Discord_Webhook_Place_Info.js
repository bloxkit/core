import { GetPlaceInfo } from 'bloxkit';
const info = await GetPlaceInfo(920587237);
console.log(info);

const embed = {
	title: info.Name,
};
