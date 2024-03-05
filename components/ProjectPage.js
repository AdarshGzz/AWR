import React from 'react'
import Image from 'next/image'
import DemoImg1 from '@/public/screens/1.jpeg'
import DemoImg2 from '@/public/screens/2.jpeg'
import DemoImg3 from '@/public/screens/3.jpeg'
import DemoImg4 from '@/public/screens/4.jpeg'

const ProjectPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold my-8">Project Overview</h1>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-row gap-20">
          <Image
            src={DemoImg1}
            alt="Image 1"
            height={500}
            width={600}
            className="rounded-lg shadow-lg"
          />
          <Image
            src={DemoImg2}
            alt="Image 2"
            height={500}
            width={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-row gap-20">
          <Image
            src={DemoImg3}
            alt="Image 3"
            height={500}
            width={600}
            className="rounded-lg shadow-lg"
          />
          <Image
            src={DemoImg4}
            alt="Image 4"
            height={500}
            width={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-bold mb-4">Project Description</h2>
        <p className="text-lg">
          We have created a digital model of a machine that automatically turns
          the rice straw into pulp, which can be turned into biodegradable
          utensils or fertilizers This recycling process helps reduce pollution
          and health risks by avoiding burning of crop wastes.
          <br />
          We have also created an animation of the machine model to show its
          working and an algorithm to enable the machines working
          <br />
          Working Principle
          <br/>
           Designing a system to convert rice straw into pulp
          involves several key components and processes. The overall system
          architecture/design can be divided into different stages, including
          collection, pre-processing, pulping, and post-processing. Here's an
          overview of the system design: 
          <br/>
          1. Collection and Sorting: 
          <br/>
          2. Chipping and Size Reduction: 
          <br/>
          3. Pretreatment:
          <br/> 
          4. Pulping: 
          <br/>
          5. Drying and Finishing: 
          <br/>
          6. Recycling and Reuse: 
          <br/>
          In this model , the rice straw is
          collected from various factories passes through the inlet and are
          subjected to filtration by Large mesh, then filtered straws are well
          cut by Double blade choppers and pass through to boiler via small
          mesh. The water supplied to the machine is boiled by heaters and this
          hot water goes into a compartment where the small pieces are left for
          4-5 hours. After this process , the remaining water passes out through
          water oulet and the softened straw is grounded by the wheels which we
          get rice straw pulp as the product which are then cleaned and dried to
          use as a raw material for making paper , biodegradable utensils etc.
        </p>
      </div>
    </div>
  );
}

export default ProjectPage
