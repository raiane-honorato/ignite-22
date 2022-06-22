import { gql, useQuery } from "@apollo/client";

function App() {

  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title

        teacher {
          name
          bio
        }
      }
    }
  `

  interface Lesson {
    id: string;
    title: string;
  }

  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map(lesson => <li key={lesson.id}>{lesson.title}</li>)}
    </ul>
  )
}

export default App
