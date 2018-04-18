const CheckWorker = {

  revertString: string =>
    string
      .split('')
      .reverse()
      .join('')
      .replace(/[&/\\#,+()$~%.'":*-_<>{}]/g, '')
      .replace(/\s/g, '')
      .toLowerCase(),

  removeSpaces: string =>
    string
      .replace(/[&/\\#,+()$~%.'":*-_<>{}]/g, '')
      .replace(/\s/g, '')
      .toLowerCase(),

  statusCode: boolean => ((boolean) ? 200 : 400),

};


module.exports = CheckWorker;
