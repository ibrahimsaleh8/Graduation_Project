import React from "react";

export default function JobDescription() {
  return (
    <div className="space-y-9">
      {/* About */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-lg">About this role</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quia
          voluptates magni laudantium, eligendi porro id deserunt iure sequi sit
          facere libero temporibus, dolores quaerat repellendus labore,
          asperiores odio tenetur. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Error quia voluptates magni laudantium, eligendi
          porro id deserunt iure sequi sit facere libero temporibus, dolores
          quaerat repellendus labore, asperiores odio tenetur. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Error quia voluptates magni
          laudantium, eligendi porro id deserunt iure sequi sit facere libero
          temporibus, dolores quaerat repellendus labore, asperiores odio
          tenetur.
        </p>
      </div>

      {/* Qualification */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-lg">Qualification</p>
        <ul className="space-y-1 list-inside list-disc">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ullam cupiditate minus odit doloribus!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ullam cupiditate minus odit doloribus!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ullam cupiditate minus odit doloribus!
          </li>
        </ul>
      </div>

      {/* Responsibility */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-lg">Responsibility</p>
        <ul className="space-y-1 list-inside list-disc">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ullam cupiditate minus odit doloribus!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ullam cupiditate minus odit doloribus!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ullam cupiditate minus odit doloribus!
          </li>
        </ul>
      </div>
    </div>
  );
}
