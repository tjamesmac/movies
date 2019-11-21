module.exports = {
  formatDate: (date) => {
    const formatDate = new Date(date * 1000).toISOString().split('T')[0];
    return formatDate; 
  }
}