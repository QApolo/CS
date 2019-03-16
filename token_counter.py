
def countTokens(file):
	list1 = file.read().split(' ')
	unique_words = set([])
	final_list = []


	for el in list1:
		if el.isalpha():
			final_list.append(el)
			unique_words.add(el)
		else:
			temp = ""
			for i in el:
				if i.isalpha():
					temp = temp + i
				else:
					if temp.isalpha():
						final_list.append(temp)
						unique_words.add(temp)
					temp = ""
			if temp.isalpha():
				final_list.append(temp)
				unique_words.add(temp)

	print("unique words: " + str(len(unique_words)))
	print("Total words: " + str(len(final_list)))
def main():
	countTokens(open('geek.txt', 'r'))

if __name__ == "__main__":
	main()