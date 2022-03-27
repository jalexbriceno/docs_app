

speciality = ['teacher', 'ta', 'student']


5.times do
  doctor = Doctor.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    speciality: "Cardiac Specialist",
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    
  )
  5.times do 
    user = User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone: "(888) 545-7575",
      notes: Faker::Lorem.paragraph(sentence_count: 2)
    )
    Appointment.create(
      appt_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
      appt_date: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
      user_id: user.id,
      doctor_id: doctor.id
    )
  end
end

puts "Data Seeded."