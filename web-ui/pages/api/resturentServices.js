
const resturentDeatails = async () =>{    
    fetch("http://localhost:4000/restaurants")
      .then(data => {
        return data;
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        return err;
      });
}


export default {resturentDeatails};