export const fetchData = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=EsSFQeaciPxPiQbvmElEbARGb59zSloF`)
    .then(res => res.json())
}