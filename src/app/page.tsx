const user = {
  nim: '2141720155',
  name: 'Faricha Aulia',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSn_HkERdOM3mE7tuGFl_4JiVxLS-ldkkcPujHR43u1r6AETwxP0Hk2gennHoqNFf5O0&usqp=CAU',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.nim} - {user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}