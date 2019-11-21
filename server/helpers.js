const self = module.exports = {
  formatDate: (date) => {
    const formatDate = new Date(date * 1000).toISOString().split('T')[0];
    return formatDate; 
  },
  get3DMovies: (movies) => {
    let count = 0;
    for (const item of movies) {
      if (item.available_in_3d) {
        ++count
      }
    }
    console.log(count);
    return count;
  },
  getMostUserComments: (movies) => {
    const userCommentCount = {};
    for (const item of movies) {
      for (const comment of item.comments) {
        const userName = comment.user;
        if (userCommentCount.hasOwnProperty(userName)) {
          userCommentCount[userName] = userCommentCount[userName] + 1;
        } else {
          userCommentCount[userName] = 1;
        }
      }
    }
    const mostComments = Object.keys(userCommentCount).reduce((a, b) => {
      return userCommentCount[a] > userCommentCount[b] ? a : b;
    })
    console.log(mostComments);
    return mostComments;
  },
  getHighestOscarsNoms: (movies) => {
    const oscarNominations = movies.map((movie, index) => {
      return movie.oscar_nominations;
    })
    console.log(Math.max(...oscarNominations));
    return Math.max(...oscarNominations);
  },
  getRecentComments: (movies) => {

  },
  createReport: (movies) => {
    const threeDeeMovies = self.get3DMovies(movies);
    const oscarNominations = self.getHighestOscarsNoms(movies);
    const userComments = self.getMostUserComments(movies);
  }
}