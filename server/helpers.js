const self = module.exports = {
  formatDate: (date) => {
    const formatDate = new Date(date * 1000).toISOString().split('T')[0];
    return formatDate; 
  },
  get3DMovies: (movies) => {
    let count = 0;
    for (const item of movies) {
      if (item.available_in_3d) {
        console.log(item);
        ++count
      }
    }
    console.log(count);
    return count;
  },
  getMostUserComments: (movies) => {

  },
  getHighestOscarsNoms: (movies) => {

  },
  getRecentComments: (movies) => {

  },
  createReport: (movies) => {
    const threeDeeMovies = self.get3DMovies(movies)
  }
}