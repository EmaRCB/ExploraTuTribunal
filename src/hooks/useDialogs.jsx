import { useState, useEffect } from 'react';
import dialogosJson from '../components/dialogos/dialogos.json'; // Ajusta la ruta según tu estructura de archivos

const useDialogs = (scenario) => {
  const [dialog, setDialog] = useState([]);

  useEffect(() => {
    const scenarioDialogs = dialogosJson.find(d => d.scenario === scenario);
    if (scenarioDialogs) {
      setDialog(scenarioDialogs.dialogs);
    }
  }, [scenario]);

  return dialog;
};

export default useDialogs;
