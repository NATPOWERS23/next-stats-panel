import Image from 'next/image';
import errorImage from '../../assets/images/error.png';

export default function NotFoundPage() {
  return (
    <>
      <Image fill src={errorImage} alt="404 error image" />
    </>
  );
}
