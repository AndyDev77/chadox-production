import Title from "@/components/Title";
import TransformationForm from "@/components/TransformationForm";

const Dashboard = () => {
  return (
    <>
      <Title
        title="Ajouter une vidéo"
        subtitle="Création d'une card avec une image et une vidéo"
      />

      <TransformationForm />
    </>
  );
};

export default Dashboard;
