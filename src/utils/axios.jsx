import axios from 'axios' ;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDVhNjliNWUxYjllYjcyNDEyNDk5ZjZlMzFlY2MxMiIsIm5iZiI6MTcyNTM2MzczNi43NzExNSwic3ViIjoiNjVmMzE3N2RjNDkwNDgwMTYzMTllYWI5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.G1-5Ee69U7B0i3UvMBXaoF6t8TAEgZxUhxZpj-bLpj4'
  }
});

export default instance;
