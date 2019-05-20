const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  aboutMe: { type: String },
  socials: [
    {
      socialName: { type: String, required: true },
      socialLink: { type: String, required: true }
    }
  ],
  educations: [
    {
      educationName: { type: String, required: true },
      address: { type: String },
      date: {
        from: { type: String, required: true },
        to: { type: String }
      },
      degree: { type: String },
      additionalInformation: [String]
    }
  ],
  skillGroups: [
    {
      skillGroupName: { type: String, required: true },
      subGroups: [
        {
          subGroupName: { type: String },
          skills: [
            {
              skillName: { type: String, required: true },
              additionalInformation: { type: String },
              date: {
                from: { type: String },
                to: { type: String }
              }
            }
          ]
        }
      ]
    }
  ],
  workExperiences: [
    {
      companyName: { type: String, required: true },
      address: { type: String },
      date: {
        from: { type: String, required: true },
        to: { type: String },
        present: { type: Boolean }
      },
      position: { type: String },
      description: { type: String },
      additionalInformation: [String],
    }
  ],
  personalProjects: [
    {
      projectName: { type: String, required: true },
      date: {
        from: { type: String, required: true },
        to: { type: String },
        present: { type: Boolean }
      },
      description: { type: String },
      additionalInformation: [String],
      skillSet: [String],
      projectUrl: { type: String }
    }
  ],
  awards: [
    {
      awardName: { type: String, required: true },
      address: { type: String },
      date: {
        from: { type: String, required: true },
        to: { type: String }
      },
      additionalInformation: [String]
    }
  ],
  certificates: [
    {
      certificateName: { type: String, required: true },
      address: { type: String },
      date: {
        from: { type: String, required: true },
        to: { type: String }
      },
      additionalInformation: [String]
    }
  ],
  activities: [
    {
      activityName: { type: String, required: true },
      position: { type: String },
      date: {
        from: { type: String, required: true },
        to: { type: String }
      },
      additionalInformation: [String]
    }
  ]
});

module.exports = mongoose.model('profile', profileSchema);
