import React from 'react'

function Neuro() {
    const data = [
        {
          "name": "Dyslexia",
          "description": "Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words.",
          "causes": "Genetic factors, differences in brain anatomy and function.",
          "prevention": "Early identification and intervention, supportive educational environment.",
          "images": [
            "https://www.shutterstock.com/image-photo/sad-tired-caucasian-girl-dyslexia-260nw-2174662661.jpg",
            "https://images.unsplash.com/photo-1507835666999-65f18f43a3d6"
          ],
          "additional_info": {
            "symptoms": "Difficulty reading, problems with spelling, writing, and pronouncing words.",
            "treatments": "Educational interventions, specialized teaching techniques, supportive technology."
          }
        },
        {
          "name": "Autism Spectrum Disorder",
          "description": "Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication and behavior.",
          "causes": "Genetic mutations, environmental factors, parental age.",
          "prevention": "No definitive prevention methods, but early diagnosis and intervention can improve outcomes.",
          "images": [
          "https://images.unsplash.com/photo-1620230874645-0d85522b20f9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0aXNtfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1518882570210-c8c86e7f62e6"
          ],
          "additional_info": {
            "symptoms": "Difficulty with communication, repetitive behaviors, restricted interests.",
            "treatments": "Behavioral therapies, educational support, medications for co-occurring conditions."
          }
        },
        {
          "name": "Dyspraxia",
          "description": "Dyspraxia is a neurological disorder that affects motor skill development.",
          "causes": "Genetic factors, premature birth, developmental issues in the brain.",
          "prevention": "Early intervention and support, physical and occupational therapy.",
          "images": [
            "https://media.istockphoto.com/id/1179587162/photo/dyspraxia-word-from-wooden-blocks-with-letters.jpg?s=612x612&w=0&k=20&c=hoDbHh8AiH66dSrqhe4A8IugpZ6mCjVnmbo2f0vzh0Y=",
            "https://images.unsplash.com/photo-1511974035430-5de47d3b95da"
          ],
          "additional_info": {
            "symptoms": "Clumsiness, difficulty with fine motor tasks, challenges with coordination.",
            "treatments": "Physical therapy, occupational therapy, adaptive techniques."
          }
        },
        {
          "name": "Attention Deficit Hyperactivity Disorder",
          "description": "Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity.",
          "causes": "Genetics, brain structure and function, prenatal factors.",
          "prevention": "No known prevention, but early diagnosis and management can help.",
          "images": [
            "https://media.istockphoto.com/id/482836467/photo/adhd.jpg?s=612x612&w=0&k=20&c=xBVgQR6U-rzY1a3nM62wCRIZy_mmqv1mJz32pZ3v35A=",
            "https://images.unsplash.com/photo-1504457049836-128360c15a7b"
          ],
          "additional_info": {
            "symptoms": "Inattention, hyperactivity, impulsivity, difficulty staying on task.",
            "treatments": "Behavioral therapy, medication, educational support."
          }
        },
        {
          "name": "Tourette Syndrome",
          "description": "Tourette Syndrome is a neurological disorder characterized by repetitive, involuntary movements and vocalizations called tics.",
          "causes": "Genetic and environmental factors.",
          "prevention": "No known prevention, but early intervention and therapy can help manage symptoms.",
          "images": [
            "https://www.aruma.com.au/wp-content/uploads/2016/02/Tourette-syndrome-blog-main-image_2.jpg",
            "https://images.unsplash.com/photo-1599718910164-6d6bbeb375e6"
          ],
          "additional_info": {
            "symptoms": "Motor tics (e.g., blinking, shrugging), vocal tics (e.g., grunting, throat clearing).",
            "treatments": "Behavioral therapy, medication, supportive therapy."
          }
        },
        {
          "name": "Obsessive-Compulsive Disorder",
          "description": "Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by unwanted and intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions).",
          "causes": "Genetics, brain structure and function, environmental factors.",
          "prevention": "No known prevention, but early diagnosis and treatment can help manage symptoms.",
          "images": [
            "https://media.assettype.com/puthiyathalaimurai%2F2023-07%2Fa61198cf-a883-4b1c-9cc9-bf4c116be555%2Focd_3.jpg",
            "https://images.unsplash.com/photo-1589758438368-251e7a199c91"
          ],
          "additional_info": {
            "symptoms": "Persistent, unwanted thoughts, repetitive behaviors like hand washing, checking.",
            "treatments": "Cognitive-behavioral therapy, medication, exposure and response prevention therapy."
          }
        },
        {
          "name": "Dyscalculia",
          "description": "Dyscalculia is a learning disability that affects a person's ability to understand numbers and learn math facts.",
          "causes": "Genetic factors, brain development.",
          "prevention": "Early intervention and specialized teaching techniques.",
          "images": [
            "https://t4.ftcdn.net/jpg/04/85/55/87/360_F_485558711_vBiMPq28mqeuZnExFWX6NPbElGgcRMzK.jpg",
            "https://images.unsplash.com/photo-1552332386-f8dd00dc47fd"
          ],
          "additional_info": {
            "symptoms": "Difficulty understanding numbers, struggling with math concepts, trouble with time management.",
            "treatments": "Specialized teaching methods, supportive educational environment."
          }
        },
        {
          "name": "Dysgraphia",
          "description": "Dysgraphia is a learning disability that affects writing abilities, including handwriting, typing, and spelling.",
          "causes": "Genetic factors, brain development.",
          "prevention": "Early intervention and specialized teaching techniques.",
          "images": [
            "https://www.shutterstock.com/image-vector/dysgraphia-dyslexia-learning-difficulties-concept-600nw-2180163409.jpg",
            "https://images.unsplash.com/photo-1581091012184-dbe5a1aeedbc"
          ],
          "additional_info": {
            "symptoms": "Poor handwriting, difficulty spelling, trouble putting thoughts on paper.",
            "treatments": "Occupational therapy, specialized teaching methods, assistive technology."
          }
        },
        {
          "name": "Sensory Processing Disorder",
          "description": "Sensory Processing Disorder (SPD) is a condition in which the brain has trouble receiving and responding to information that comes in through the senses.",
          "causes": "Unknown, but genetic and environmental factors may contribute.",
          "prevention": "No known prevention, but early intervention can help manage symptoms.",
          "images": [
            "https://images.theconversation.com/files/595118/original/file-20240520-17-u4yok.jpg?ixlib=rb-4.1.0&rect=0%2C502%2C4577%2C2285&q=45&auto=format&w=1356&h=668&fit=crop",
            "https://images.unsplash.com/photo-1596461404969-bcc1601f2363"
          ],
          "additional_info": {
            "symptoms": "Oversensitivity or undersensitivity to sensory stimuli, difficulty with coordination.",
            "treatments": "Occupational therapy, sensory integration therapy."
          }
        },
        // {
        //   "name": "Nonverbal Learning Disorder",
        //   "description": "Nonverbal Learning Disorder (NVLD) is a condition characterized by a significant discrepancy between higher verbal skills and weaker motor, visual-spatial, and social skills.",
        //   "causes": "Unknown, but brain structure differences may play a role.",
        //   "prevention": "No known prevention, but early intervention and support can help.",
        //   "images": [
        //     "",
        //     "https://images.unsplash.com/photo-1552313683-dfae9780a37b"
        //   ],
        //   "additional_info": {
        //     "symptoms": "Difficulty with nonverbal communication, trouble with motor skills and coordination.",
        //     "treatments": "Educational support, occupational therapy, social skills training."
        //   }
        // }
      ]
      
      const styles = {
        container: {
          fontFamily: 'Roboto, sans-serif',
          padding: '20px'
        },
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        },
        headerLeft: {
          fontSize: '2em',
          fontWeight: 'bold'
        },
        headerRight: {
          fontSize: '0.8em',
          fontWeight: 'normal'
        },
        mainImage: {
          display: 'block',
          margin: 'auto',
          width: '80%',
          maxHeight: '500px',
          objectFit: 'center',
          marginBottom: '20px',
          borderRadius:'10px'
        },
        infoText: {
          fontSize: '1.2em',
          marginBottom: '20px'
        },
        cardContainer: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          overflow: 'visible'
        },
        card: {
          width: 'calc(33.333% - 20px)',
          border: '1px solid #ddd',
          backgroundColor:'white',
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer'
        },
        cardImage: {
          width: '100%',
          height: '200px',
          objectFit: 'cover'
        },
        cardContent: {
          padding: '10px'
        },
        cardTitle: {
          margin: '0 0 10px',
          fontSize: '1.2em'
        },
        cardDescription: {
          margin: '0'
        }
      };
    
      const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      };
    
      const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
      };
  return (
    <div style={styles.container}>
    <header style={styles.header}>
      <h1 style={styles.headerLeft}>Neuro Divergent Diseases</h1>
      {/* <h2 style={styles.headerRight}>Information about different neuro divergent diseases</h2> */}
    </header>
    <img
      style={styles.mainImage}
      src="https://assets.weforum.org/editor/yMJwNFDfK6OQ6f5-oIu0v96Vmj2JJKtfMVc5P788gms.png"
      alt="Main disease illustration"
    />
    <p style={styles.infoText}>
      Some information about neuro divergent diseases goes here. It can be a brief introduction or some important facts.
    </p>
    <div style={styles.cardContainer}>
      {data.map((disease, index) => (
        <div
          key={index}
          style={styles.card}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img style={styles.cardImage} src={disease.images[0]} alt={disease.name} />
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>{disease.name}</h3>
            <p style={styles.cardDescription}>{disease.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Neuro