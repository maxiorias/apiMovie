const fetchMovie = async () =>{
      const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=843fa841137dff401d35e2ed010362af");
      const data = await response.json();
      console.log(data);


    };

fetchMovie();

