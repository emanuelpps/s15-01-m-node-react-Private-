const formatDuration = (duration) => {
  if (!duration) return "00:00";
  const absoluteDuration = Math.abs(duration);
  const hours = Math.floor(absoluteDuration / 3600);
  const minutes = Math.floor((absoluteDuration % 3600) / 60);
  return `${hours ? `${hours}h:` : ""}${
    minutes >= 10 ? `${minutes}min` : `0${minutes}min`
  }
  }`;
};

export default formatDuration;
