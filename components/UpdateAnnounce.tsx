export function UpdateAnnounce(props: Announcement): JSX.Element {
  return (
    <div className='container'>
      <div className='update-announce'>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <h3>
          Enjoy{' '}
          <a
            href={props.video ?? 'https://youtu.be/dQw4w9WgXcQ'}
            className='click-me'
          >
            this music video
          </a>{' '}
          meanwhile.
        </h3>
      </div>
    </div>
  );
}

export interface Announcement {
  title: string;
  subtitle: string;
  video?: string;
}
