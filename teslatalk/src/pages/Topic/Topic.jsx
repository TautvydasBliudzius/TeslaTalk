import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getTopic } from "../../api/topics";
import TopictGeneralInfo from "./TopicGeneralInfo";
import TopicActions from "./TopicActions";

const Project = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopic(id)
      .then((response) => {
        setTopic(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="topicContainer">
      <TopicActions id={topic.id} />
      <TopictGeneralInfo project={topic} />
    </div>
  );
};

export default Project;
