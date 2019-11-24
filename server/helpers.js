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
    return mostComments;
  },
  getHighestOscarsNoms: (movies) => {
    const oscarNominations = movies.map((movie, index) => {
      return movie.oscar_nominations;
    })
    return Math.max(...oscarNominations);
  },
  getRecentComments: (movies) => {
    const comments = [];
    for (const item of movies) {
      for (const comment of item.comments) {
        comments.push(comment);
      }
    }
    const recentComments = comments
      .sort((a, b) => new Date(parseInt(b.dateCreated)) - new Date(parseInt(a.dateCreated)))
      .filter((item, index) => index < 5);
    const formatCommentDate = recentComments.map((comment) => {
      comment.dateCreated = self.formatDate(parseInt(comment.dateCreated));
      return comment;
    })
    return formatCommentDate;
  },
  createReport: (movies) => {
    const threeDeeMovies = self.get3DMovies(movies);
    const userComments = self.getMostUserComments(movies);
    const oscarNominations = self.getHighestOscarsNoms(movies);
    const recentComments = self.getRecentComments(movies);
    const report = {
      movies_available_in_3d: threeDeeMovies,
      user_with_most_comments: userComments,
      most_oscar_nominations: oscarNominations,
      newest_comments: recentComments,
    }
    return report;
  }
}