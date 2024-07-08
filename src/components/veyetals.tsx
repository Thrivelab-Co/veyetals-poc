import VeyetalsView from '@veyetals/react-veyetals-view'
import '@veyetals/react-veyetals-view/dist/index.css'

const Veyetals = ({showUI}: {showUI: boolean}) => {
  const onComplete = (data: any) => {
    console.log('onComplete', data);
  }

  const userId = 'user-id';
  const channelId = 'channel-id';

  return (
    <VeyetalsView
      userId={userId}
      channelId={channelId}
      onComplete={onComplete}
      showUI={showUI}
    />
  );
}

export default Veyetals;
