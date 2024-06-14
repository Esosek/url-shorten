import styles from './BoostCTA.module.css';
import Link from '../UI/Link';

export default function BoostCTA() {
  return (
    <section className={`${styles.boost} bg-violet text-center py-12 px-6`}>
      <h2 className="font-bold text-2xl mb-6 text-neutral-100">
        Boost your links today
      </h2>
      <Link isPrimary={true} cssClass="mx-auto">
        Get Started
      </Link>
    </section>
  );
}
