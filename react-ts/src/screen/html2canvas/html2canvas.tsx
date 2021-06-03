interface Props {}
const PageB = (props: Props) => {
  const _onClick = () => {};
  return (
    <div>
      <div>PageB</div>
      <button onClick={_onClick}>点击</button>
    </div>
  );
};
export default PageB;
