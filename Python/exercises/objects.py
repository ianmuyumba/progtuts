"""
	Upvotes vs Downvotes
		- Given a dictionary containing counts of both upvotes and downvotes, return what vote count
		 should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

		# Examples
		get_vote_count({ "upvotes": 13, "downvotes": 0 }) ➞ 13
		get_vote_count({ "upvotes": 2, "downvotes": 33 }) ➞ -31
		get_vote_count({ "upvotes": 132, "downvotes": 132 }) ➞ 0

"""

votes = {"upvotes": 0, "downvotes": 0}

def get_vote_count(votes):
	voteCount = votes["upvotes"] - votes["downvotes"]
	return voteCount

count = get_vote_count({ "upvotes": 13, "downvotes": 0 })
print(count)



"""
	You FAILEDPASSED the Exam
		- The challenge is to fix all of the bugs in this incredibly messy code, which the code in the
		image might've actually looked like (probably not)! The code given will output the same middle
		two lines as in the image shown above.
			* First parameter is the user's score.
			* Second parameter is the required score.
		

		# Examples
		grade_percentage("85%", "85%") ➞ "You PASSED the Exam"
		grade_percentage("99%", "85%") ➞ "You PASSED the Exam"
		grade_percentage("65%", "90%") ➞ "You FAILED the Exam"


	Notes
	 + Note that inputs will be given as a string percentage number.
	 + Maintain all capitalization.
	 + Feel free to declutter and refactor code if it helps!

"""

def grade_percentage(user_score, pass_score):






















#Python