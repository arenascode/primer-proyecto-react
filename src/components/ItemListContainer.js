
const ItemListContainer = ({ greeting }) => {
  const styles = {
    padding: '5px',
    color: 'brown',
    textAlign: 'center'
  }
  return (
    <div style={styles}>{greeting}</div>
  )
}
export default ItemListContainer