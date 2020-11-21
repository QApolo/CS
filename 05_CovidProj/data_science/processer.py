


def pre_processData(path):
    csv_file = open(path, "r")
    csv_processed = open(path.split(".")[0]+"_processed."+ path.split(".")[1], "w")
    for line in csv_file:
        spl = line.split(",")
        #print(spl)
        line2 = spl[0]+","+spl[1].replace(" ", "").rstrip("\n")+"\n"
        print(line2)
        csv_processed.write(line2)
    csv_processed.close()
    csv_file.close()

pre_processData("Population.csv")