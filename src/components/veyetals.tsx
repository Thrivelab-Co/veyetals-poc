import VeyetalsView from '@veyetals/react-veyetals-view'
import '@veyetals/react-veyetals-view/dist/index.css'

const Veyetals = ({onComplete}: {onComplete: (data: any) => void}) => {
  const userId = 'test-user-id-' + new Date().getTime();
  const channelId = 'THRIVE_LABS';

  return (
    <VeyetalsView
      userId={userId}
      channelId={channelId}
      onComplete={onComplete}
      modelPath="/models"
    />
  );
}

export default Veyetals;
