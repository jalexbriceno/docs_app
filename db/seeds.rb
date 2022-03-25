speciality = ['teacher', 'ta', 'student']


10.times do
  doctor = Doctor.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    
  )
  10.times do 
    user = User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone: "(888) 545-7575"
    )

    Appointment.create(
      time: Faker::Time.between(from: 'October 15, 2018 10:48 AM'),
      date: Faker::Date.between(from: '2022-01-01', to: '2022-12-31'),
      user_id: user.id,
      doctor_id: doctor.id
    )
  end
end

puts "Data Seeded."