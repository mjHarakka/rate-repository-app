import { Text } from 'react-native-web'

const RepositoryItem = ({ fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => {
  return (
    <Text>
      Full name: {fullName}
      <br></br>
      Description: {description}
      <br></br>
      Language: {language}
      <br></br>
      Forks: {forksCount}
      <br></br>
      Stars: {stargazersCount}
      <br></br>
      Rating: {ratingAverage}
      <br></br>
      Reviews: {reviewCount}
    </Text>
  )
}

export default RepositoryItem
