class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
  validates :appt_time, :appt_date, presence: true
end
