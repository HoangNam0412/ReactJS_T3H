import styles from "./ProductCard.module.css";

const arr = [
  {
    id: 1,
    img: "https://img.bitas.com.vn/sanpham/ZGOBG.10/HNG/lg1.png",
    name: "Giày thể thao",
    price: 20000,
  },
  {
    id: 2,
    img: "https://img.bitas.com.vn/sanpham/ZGOBG.10/HNG/lg1.png",
    name: "Giay Nu",
    price: 30000,
  },
  {
    id: 3,
    img: "https://img.bitas.com.vn/sanpham/ZGOBG.10/HNG/lg1.png",
    name: "Giày sneaker",
    price: 33000,
  },
  {
    id: 4,
    img: "https://img.bitas.com.vn/sanpham/ZGOBG.10/HNG/lg1.png",
    name: "Giày sneaker",
    price: 40000,
  }
];

function App() {
  return (
    <div className={styles.container}>
      {arr.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.imagePlaceholder}>
            <img src={item.img} alt={item.name} />
          </div>
          <p className={styles.productName}>{item.name}</p>
          <p className={styles.productPrice}>Giá: {item.price.toLocaleString()} VND</p>
          <button className={styles.buyButton}>Mua Ngay</button>
        </div>
      ))}
    </div>
  );
}

export default App;
