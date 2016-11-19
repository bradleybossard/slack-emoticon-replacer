import json

infile = 'slack_emoji.txt'
outfile = 'emoji_names.json'

lines = [line.rstrip('\n') for line in open(infile)]
#print lines

with open(outfile, 'w') as fp:
    json.dump(lines, fp)
